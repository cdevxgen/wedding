import  { addLeadingZero } from "../../helpers/addLeadingZero";

const ServicePicture = ({ order, name, shortcut }) => {
  const num = addLeadingZero(order);
  return (
    <picture className="self-end tablet:self-auto shrink-0">
      <source
        srcSet={`/assets/images/mobile/wedding/wedding-${num}-${shortcut}.webp 1x,
        /assets/images/mobile/wedding/wedding-${num}-${shortcut}@2x.webp 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet={`/assets/images/tablet/wedding/wedding-${num}-${shortcut}.webp 1x,
        /assets/images/tablet/wedding/wedding-${num}-${shortcut}@2x.webp 2x`}
        media="(max-width: 1279px)"
        type="image/webp"
      />
      <source
        srcSet={`/assets/images/desktop/wedding/wedding-${num}-${shortcut}.webp 1x,
        /assets/images/desktop/wedding/wedding-${num}-${shortcut}@2x.webp 2x`}
        media="(min-width: 1280px)"
        type="image/webp"
      />

      <source
        srcSet={`/assets/images/mobile/wedding/wedding-${num}-${shortcut}.jpg 1x,
        /assets/images/mobile/wedding/wedding-${num}-${shortcut}@2x.jpg 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`/assets/images/tablet/wedding/wedding-${num}-${shortcut}.jpg 1x,
        /assets/images/tablet/wedding/wedding-${num}-${shortcut}@2x.jpg 2x`}
        media="(max-width: 1279px)"
      />
      <source
        srcSet={`/assets/images/desktop/wedding/wedding-${num}-${shortcut}.jpg 1x,
        /assets/images/desktop/wedding/wedding-${num}-${shortcut}@2x.jpg 2x`}
        media="(min-width: 1280px)"
      />

      <img
        className="block"
        loading="lazy"
        src={`/assets/images/mobile/wdding/wedding-${num}-${shortcut}.jpg`}
        alt={name}
        sizes="(min-width: 1200px) 608px, (min-width: 768px) 464px, 100vw"
      />
    </picture>
  );
};

export default ServicePicture;
