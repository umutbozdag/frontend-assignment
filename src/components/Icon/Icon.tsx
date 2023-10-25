// Icon.tsx
import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../../config/icons.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;