import './style.css';

export const ValidationLine = ({ passwordTracker, password }) => {
  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  const lineCheck = () => {
    if (password.length <= 0) {
      return '';
    } else if (!passwordTracker.eightCharsOrGreater) {
      return 'red-line-full-width';
    } else if (
      passwordTracker.eightCharsOrGreater &&
      passwordTracker.letter &&
      passwordTracker.specialChar &&
      passwordTracker.number
    ) {
      return 'green-line';
    } else if (
      (passwordTracker.eightCharsOrGreater &&
        passwordTracker.letter &&
        passwordTracker.specialChar) ||
      (passwordTracker.letter && passwordTracker.number) ||
      (passwordTracker.number && passwordTracker.specialChar)
    ) {
      return 'orange-line';
    } else if (
      passwordTracker.eightCharsOrGreater &&
      (passwordTracker.letter ||
        passwordTracker.number ||
        passwordTracker.specialChar)
    ) {
      return 'red-line';
    }
  };

  return (
    <div className="validation-container">
      <div className="password-strength-meter">
        <div className={lineCheck()}></div>
      </div>

      <div>
        {passwordStrength < 4 && 'Must contain '}
        {!passwordTracker.letter && 'letter, '}
        {!passwordTracker.specialChar && 'special character, '}
        {!passwordTracker.number && 'number, '}
        {!passwordTracker.eightCharsOrGreater && 'eight characters or more'}
      </div>
    </div>
  );
};
