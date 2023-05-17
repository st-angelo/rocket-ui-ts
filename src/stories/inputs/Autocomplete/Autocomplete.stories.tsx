// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete as AutocompleteComponent } from 'components'
import { CreatablePreview } from './CreatablePreview'
import { DefaultPreview } from './DefaultPreview'
import { OptionTypesPreview } from './OptionTypesPreview'
import { MultipleSelectionPreview } from './MultipleSelectionPreview'
import { CheckboxesPreview } from './CheckboxesPreview'
import { loadFilteredOptions, options } from './_mocks'
import { StylingPreview } from './StylingPreview'
import { RequiredPreview } from './RequiredPreview'

const meta: Meta<typeof AutocompleteComponent> = {
  title: 'Components/Inputs/Autocomplete',
  component: AutocompleteComponent,
  tags: ['autodocs']
} satisfies Meta<typeof AutocompleteComponent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Autocomplete component.
 *
 * The value must be chosen from a predefined set of allowed values.
 */
export const Default: Story = {
  args: {
    label: 'Basic Autocomplete',
    options,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
  },
  render: args => <DefaultPreview {...args} />
}

/**
 * By default, the component accepts the following options structures:
 * 
```typescript
interface AutocompleteOption {
  id: any
  name: string
}
// or by setting `simpleValue` property to true
type AutocompleteOption = string;
```
for instance:

```typescript
const options = [
  { name: 'The Godfather', id: 1 },
  { name: 'Pulp Fiction', id: 2 },
]
// or with `simpleValue` property to true
const options = ['The Godfather', 'Pulp Fiction']
```
*/
export const OptionTypes: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Numeric Autocomplete"
            value={1}
            onChange={setNumericValue}
            simpleValue={true}
            options={[1,2,3]}
          />
        `,
        format: true
      }
    }
  },
  render: args => <OptionTypesPreview {...args} />
}

/**
 * By setting the `creatable` property to `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options and can add
 * his own values.
 *
 * The label that is displayed before adding a new option is also configurable using `createdLabel` property. By default it's set to "Add"
 */
export const Creatable: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Creatable Autocomplete"
            value={value}
            onChange={setNumericValue}
            creatable={true}
            createdLabel={"New option"}
            options={options}
          />
        `,
        format: true
      }
    }
  },
  render: args => <CreatablePreview {...args} />
}

/**
 * Also known as tags, the user is allowed to enter more than one value.
 * This is possible by setting the `isMultiSelection` property to `true`.
 */
export const MultipleSelection: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
            label="Multiple Selection"
            value={value}
            onChange={setValue}
            options={options}
            isMultiSelection
          />
        `,
        format: true
      }
    }
  },
  render: args => <MultipleSelectionPreview {...args} />
}

/**
 * Multiple selection can also be done using checkboxes by setting the `withCheckboxes` property to `true`.
 */
export const Checkboxes: Story = {
  args: {
    label: 'Multiple Selection',
    options,
    isMultiSelection: true,
    withCheckboxes: true,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
  },
  render: args => <CheckboxesPreview {...args} />
}

/**
 * The component supports loading options asynchronously. It basically waits for the component to be interacted with to load the options.
 *
 * During the `loading` state, it displays a progress state as long as the network request is pending.
 */
export const LazyLoading: Story = {
  args: {
    label: 'Lazy Loading',
    loadOptions: loadFilteredOptions,
    onChange: null,
    onClose: null,
    onInputChange: null,
    onOpen: null
  },
  render: args => <DefaultPreview {...args} />
}

export const Styling: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete
          open
          value={value}
          onChange={onChange}
          placeholder={'Placeholder'}
          typographyContentColor={'error'}
        />
        <Autocomplete
          options=[...]
          inputSelectedColor={'#26C6DA'}
          value={value}
          onChange={onChange}
        />
        `,
        format: true
      }
    }
  },
  render: () => <StylingPreview />
}

/**
 *  Various configurations using `TextField` inherited props. Check-out the code bellow. 
 */
export const TextFieldInheritance: Story = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
        <Autocomplete 
          required 
          label="Required" 
          value={requiredValue} 
          onChange={setRequiredValue} 
          options={options} 
        />
        <Autocomplete 
          error 
          label="Error" 
          value={errorValue} 
          onChange={setErrorValue} 
          options={options} 
        />
        <Autocomplete
          helperText="Please, select an option."
          label="Helper text"
          value={helperValue}
          onChange={setHelperValue}
          options={options}
        />
        <Autocomplete
          label="Variant outlined"
          value={helperValue}
          onChange={setHelperValue}
          options={options}
          inputTextFieldProps={{ variant: 'outlined' }}
        />
        `,
        format: true
      }
    }
  },
  render: args => <RequiredPreview {...args} />
}
