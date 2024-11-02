import PropTypes from 'prop-types';


const Button = ({children, primaryColor, background, borderColor}) => {
    const buttonStyles = {
        color: primaryColor,
        backgroundColor: background,
        border: `1px solid ${borderColor}`
    }
  return (
    <button style={buttonStyles} className="rounded-full px-2 py-1">{children}</button>
  )
}

export default Button
