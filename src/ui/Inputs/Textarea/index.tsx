import React from 'react';
import clsn from 'classnames';
import { TextareaProps } from './types';
import sts from './styles.module.scss';

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  id,
  label,
  disabled,
  placeholder = 'Введите текст...',
  rows = 5,
  cols,
  isCounterVisible,
  maxCountLetters = 250,
  сontainerClassName,
  onChange,
}): React.ReactElement => {
  const [isLimit, setIsLimit] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (value.length === maxCountLetters) {
      setIsLimit(true);
    } else {
      setIsLimit(false);
    }
  }, [value, maxCountLetters]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (onChange && value.length <= maxCountLetters) {
      onChange(event);
    }
  };

  return (
    <div className={clsn(sts.textarea, сontainerClassName)}>
      {Boolean(label) || isCounterVisible ? (
        <div className={sts.textarea__labelWrapper}>
          {Boolean(label) && (
            <label
              htmlFor={name}
              title={label}
              className={sts.textarea__labelWrapper_label}
            >
              {label}
            </label>
          )}
          {isCounterVisible && (
            <span
              className={clsn(sts.textarea__labelWrapper_counter, {
                [sts['--limit']]: isLimit,
              })}
            >
              {value.length}/{maxCountLetters}
            </span>
          )}
        </div>
      ) : null}
      <div className={sts.textarea__input}>
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          disabled={disabled}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default Textarea;
