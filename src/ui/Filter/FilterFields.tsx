import React from 'react';
import { Field } from 'formik';
import { map } from 'lodash';
import cn from 'classnames';
import { DateInput, InputText, Select } from 'ui/Inputs';
import { IFilterFieldsProps } from './types';
import sts from './styles.module.scss';

export const FilterFields: IFilterFieldsProps = ({ fields }) => {
  return (
    <React.Fragment>
      {map(fields, (row, index) => {
        return (
          <div key={index} className={sts.form__inputs_row}>
            {map(row, ({ value, type, name, colWidth, ...field }) => {
              if (type === 'TEXT') {
                return (
                  <div key={name} className={cn(sts.form__inputs_column, colWidth)}>
                    <Field
                      name={name}
                      as={InputText}
                      value={value}
                      {...field}
                    />
                  </div>
                );
              }
              if (type === 'SELECT') {
                return (
                  <div key={name} className={cn(sts.form__inputs_column, colWidth)}>
                    <Field
                      name={name}
                      as={Select}
                      value={value}
                      {...field}
                    />
                  </div>
                );
              }
              if (type === 'DATETIME') {
                return (
                  <div key={name} className={cn(sts.form__inputs_column, colWidth)}>
                    <Field
                      name={name}
                      as={DateInput}
                      value={value}
                      {...field}
                    />
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};
