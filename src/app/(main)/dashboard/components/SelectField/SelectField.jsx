import { ChevronDown } from 'lucide-react'
import { useId } from 'react'

const SelectField = ({ label, value, onChange, options }) => {
  const id = useId()

  return (
    <div className="mb-8">
      <div className="mb-2">
        <label className="text-gray-700 text-sm" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="px-4 h-12 rounded-3xl border border-gray-300 w-full bg-white appearance-none focus:outline-none"
        >
          {options.map(({ value: optValue, label: optLabel }) => (
            <option key={optValue} value={optValue}>
              {optLabel}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  )
}

export default SelectField
