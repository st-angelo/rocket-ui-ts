import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, DateTime, TextField } from 'components'
import { ControlType, DynamicFieldProps } from './types'
import { Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material'

function DynamicField<TCustomComponentProps extends object = any, TAutocompleteOptions = any>(
  props: DynamicFieldProps<TCustomComponentProps, TAutocompleteOptions>
) {
  const {
    controlType,
    id,
    value,
    label,
    onChange,
    options,
    loadOptions,
    error,
    helperText,
    CustomComponent,
    customComponentProps,
    ...rest
  } = props

  const onCheckboxChange = useCallback(
    (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => onChange(checked),
    [onChange]
  )

  const defaultControl = useMemo(
    () => <TextField id={id} value={String(value)} label={label} error={error} helperText={helperText} disabled />,
    [id, value, label, error, helperText]
  )

  switch (controlType) {
    case ControlType.Text:
      return (
        <TextField
          id={id}
          value={(value as string | number) || ''}
          label={label}
          onChange={onChange}
          fullWidth
          error={error}
          helperText={helperText}
          {...rest}
        />
      )
    case ControlType.Integer:
      return (
        <TextField
          id={id}
          value={(value as string | number) || ''}
          label={label}
          onChange={onChange}
          fullWidth
          error={error}
          helperText={helperText}
          {...rest}
          isNumeric
          inputProps={{ ...props.inputProps, decimalScale: 0, thousandSeparator: false }}
        />
      )
    case ControlType.Numeric:
      return (
        <TextField
          id={id}
          value={(value as string | number) || ''}
          label={label}
          onChange={onChange}
          fullWidth
          error={error}
          helperText={helperText}
          {...rest}
          isNumeric
        />
      )
    case ControlType.Date:
      return (
        <DateTime
          value={value as Date | string}
          label={label}
          onChange={onChange}
          error={error}
          helperText={helperText}
          {...rest}
        />
      )
    case ControlType.Checkbox:
      return (
        <FormControlLabel
          control={<Checkbox id={id} onChange={onCheckboxChange} {...rest} checked={Boolean(props.value)} />}
          label={label}
        />
      )
    case ControlType.Autocomplete:
      return (
        <Autocomplete
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          options={options}
          loadOptions={loadOptions}
          fullWidth
          error={error}
          helperText={helperText}
          {...rest}
        />
      )
    case ControlType.Custom:
      if (CustomComponent) return <CustomComponent {...customComponentProps} />
      return defaultControl
    default:
      return defaultControl
  }
}

DynamicField.propTypes = {
  /**
   * The type of the control. Can either be one of the predefined below, or 'Custom', in which case CustomComponent needs to be defined
   */
  controlType: PropTypes.oneOf(['Text', 'Integer', 'Numeric', 'Date', 'Checkbox', 'Autocomplete', 'Custom']).isRequired,
  /**
   * The id of the element, passed to the corresponding id property of underlying controls
   */
  id: PropTypes.string,
  /**
   * The value of the element, passed to the corresponding value property (ex. value for TextField, checked for Checkbox) of underlying controls
   */
  value: PropTypes.any,
  /**
   * The label of the element, passed to the corresponding label property of the underlying control
   */
  label: PropTypes.string,
  /**
   * The change handler of the element, passed to the corresponding onChange property of underlying controls
   */
  onChange: PropTypes.func,
  /**
   * Indicates whether the field has an error
   */
  error: PropTypes.bool,
  /**
   * A text or other element indicating the error message
   */
  helperText: PropTypes.node,
  /**
   * Indicates whether the field is required
   */
  required: PropTypes.bool,
  /**
   * Indicates whether the field is read-only
   */
  readOnly: PropTypes.bool,
  /**
   * Indicates whether the field is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Custom component for the input. Requires controlType to be set 'Custom'
   */
  CustomComponent: PropTypes.elementType,
  /**
   * Props that will be passed to the custom component. The CustomComponent property needs to be defined
   */
  customComponentProps: PropTypes.object
}

export default DynamicField
