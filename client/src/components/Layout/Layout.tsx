import { FunctionComponent } from "react";

import "../../styles/utils.scss";
import "../../styles/reset.css";

interface LayoutProps {
    children: any;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default Layout;
