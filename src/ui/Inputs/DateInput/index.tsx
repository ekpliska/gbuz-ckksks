import React from 'react';
import { Moment } from 'moment';
import { DatePicker, ConfigProvider } from 'antd';
import locale from 'antd/es/locale/ru_RU';
import { DateInputProps, EventValue, RangeValue } from './types';
import sts from './styles.module.scss';

const DateInput: React.FC<DateInputProps> = ({
  value,
  label,
  placeholder = 'дд.мм.гггг',
  category = 'date-picker',
  picker = 'date',
  disabled,
  dateFormat = 'DD.MM.YYYY',
  onChange,
}): React.ReactElement => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (
    date: EventValue<Moment> | RangeValue<Moment> | null,
  ) => {
    if (onChange) {
      onChange(date);
    }
  };

  const handleOnOpenClick = (openValue: boolean) => {
    setOpen(openValue);
  };

  if (category === 'date-range') {
    return (
      <div className={sts.dateInput}>
        {label && <div className={sts.dateInput__label}>{label}</div>}
        <div className={sts.dateInput__container}>
          <ConfigProvider locale={locale}>
            <DatePicker.RangePicker
              value={Array.isArray(value) ? value : [null, null]}
              picker={picker}
              placeholder={['дд.мм.гггг', 'дд.мм.гггг']}
              format={dateFormat}
              disabled={disabled}
              dropdownClassName={sts.datePickerPopup}
              popupStyle={
                open ? { position: 'fixed', zIndex: 1010 } : { display: 'none' }
              }
              onChange={handleChange}
              onOpenChange={handleOnOpenClick}
            />
          </ConfigProvider>
        </div>
      </div>
    );
  }

  return (
    <div className={sts.dateInput}>
      {label && <div className={sts.dateInput__label}>{label}</div>}
      <div className={sts.dateInput__container}>
        <ConfigProvider locale={locale}>
          <DatePicker
            value={!Array.isArray(value) ? value : null}
            picker={picker}
            showToday={false}
            placeholder={!Array.isArray(placeholder) ? placeholder : 'дд.мм.гггг'}
            format={dateFormat}
            disabled={disabled}
            dropdownClassName={sts.datePickerPopup}
            popupStyle={
              open ? { position: 'fixed', zIndex: 1010 } : { display: 'none' }
            }
            onChange={handleChange}
            onOpenChange={handleOnOpenClick}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default DateInput;
