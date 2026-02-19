import React from 'react'

type Props = {
  type: HTMLInputElement['type']
  placeholder: string
  value: string
  onInputChange: (value: string) => void
}


const InputLogin: React.FC<Props> = ({type, placeholder, value, onInputChange}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="p-2 bg-[#7B7B7B] placeholder:text-[#D3D3D3] text-white"
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck="false"
    data-lpignore="true"
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)}
  />
)

export default InputLogin
