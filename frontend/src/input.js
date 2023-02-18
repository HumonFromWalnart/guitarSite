import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
    const { placeholder, type, id, value, onClick, onChange, borderColor = 'none', name } = props;
    return (
        <input
            id="input"
            ref={ref}
            name={name}
            type={type}
            value={value}
            style={{ borderColor }}
            onClick={onClick}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
})


