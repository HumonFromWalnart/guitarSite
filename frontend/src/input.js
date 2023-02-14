import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
    const { placeholder, type, id, value, onClick, onChange, borderColor = 'none' } = props;
    return (
        <input
            id={id}
            ref={ref}
            type={type}
            value={value}
            style={{ borderColor }}
            onClick={onClick}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
})


