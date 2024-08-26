export const Toggle = ({ handleChange  }) => {
    return (
        <div className="absolute hidden">
            <input type="checkbox" id="check" onChange={handleChange} />
        </div>
    )
}