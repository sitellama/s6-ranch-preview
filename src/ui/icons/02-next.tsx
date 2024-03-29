import { classNames } from "@/utils/classnames";
import { SVGProps } from "react";

export function IconNext({ className, title, ...rest }: SVGProps<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames(className)} viewBox="0 0 64 64" {...rest}>
            {title && <title>{title}</title>}
            <path d="M16 57a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4L46.33 32 15.4 8.8a1 1 0 1 1 1.2-1.6l32 24a1 1 0 0 1 0 1.6l-32 24a1 1 0 0 1-.6.2Z" />
        </svg>
    );
}
