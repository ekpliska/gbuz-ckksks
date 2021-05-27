import React from 'react';
import clsn from 'classnames';
import EmptyLabel from 'ui/EmptyLabel';
import { ClearIcon, DownArrowIcon } from 'ui/IconsSvg';
import { IOptionType, SelectProps } from './types';
import sts from './styles.module.scss';

const Select: React.FC<SelectProps> = ({
  name,
  label,
  placeholder = 'Выбрать из списка',
  options,
  value,
  classNameContainer,
  onSelect,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isResetOptions, setIsResetOptions] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>(value?.name || '');
  const [cloneOptions, setCloneOptions] = React.useState<IOptionType[] | null>(options);
  const divContainerRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const path = event.composedPath && event.composedPath();
    if (divContainerRef.current && !path.includes(divContainerRef.current)) {
      setIsOpen(false);
    }
  };

  const handleOpenClick = () => {
    if (searchValue.length) {
      setIsOpen(true);
    } else {
      setIsOpen((prevState) => !prevState);
    }
  };

  const handleSelectOption = (option: IOptionType) => () => {
    if (onSelect) {
      onSelect(option, name);
      setSearchValue(option.name);
      setIsResetOptions(true);
      setCloneOptions(options);
    }
  };

  const handleClickClear = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    if (onSelect) {
      onSelect(null, name);
      setSearchValue('');
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setIsResetOptions(false);
  };

  const handleBlurInput = () => {
    const option: IOptionType | undefined = options?.find((option) => option.name.toLowerCase() === searchValue.toLowerCase());
    if (onSelect && option) {
      onSelect(option, name);
      setSearchValue(option.name);
    } else if (value && !option) {
      setSearchValue(value.name);
    } else {
      setSearchValue('');
    }
    setIsResetOptions(true);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return (): void => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isResetOptions && options && searchValue.length) {
      setCloneOptions(options.filter(({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1));
    } else {
      setCloneOptions(options);
    }
  }, [isResetOptions, searchValue, setCloneOptions]);

  return (
    <div
      ref={divContainerRef}
      className={clsn(sts.selectContainer, classNameContainer)}
    >
      {label && <div className={sts.selectContainer__label}>{label}</div>}
      <div className={clsn(sts.selectContainer__wrapper, { [sts['--open']]: isOpen })}>
        <div className={sts.select}>
          <div className={sts.select__inputWrapper} onClick={handleOpenClick}>
            <input
              type='text'
              name={name}
              className={sts.select__inputWrapper_input}
              placeholder={placeholder}
              value={searchValue}
              onChange={handleChangeInput}
              onBlur={handleBlurInput}
            />
            {(Boolean(value) || Boolean(searchValue)) && (
              <div
                className={sts.select__inputWrapper_clear}
                onClick={handleClickClear}
              >
                <ClearIcon />
              </div>
            )}
            <div
              className={clsn(sts.select__inputWrapper_arrow, {
                [sts['--open']]: isOpen,
              })}
            >
              <DownArrowIcon width='10' height='10' />
            </div>
          </div>
          {isOpen && (
            <div className={sts.select__popup}>
              {cloneOptions?.length ? (
                cloneOptions.map((option) => (
                  <div
                    key={option.id}
                    className={clsn(sts.select__popup_item, {
                      [sts['--selected']]:
                        String(option.name) === String(value?.name),
                    })}
                    onClick={handleSelectOption(option)}
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <div
                  className={clsn(sts.select__popup_item, sts['--no-hover'])}
                >
                  <EmptyLabel textLabel='Нет данных' />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
