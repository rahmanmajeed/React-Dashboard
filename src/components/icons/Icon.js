import IconUrl from '../assets/icons.svg';

function Icon({icon, size, style}) {
  // //`use` means go find the chunk or clone of SVG that is given here
  return (
    <>
      <svg className={`h-${size} w-${size} ${style}`}>
        <use xlinkHref={`${IconUrl}${icon}`} />
      </svg>
    </>
  );
}

export default Icon;
