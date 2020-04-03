import React from 'react';
export declare type BaseImageProps = {
    alt: string;
    fullWidth?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;
export declare function BaseImage({ alt, className, fullWidth, ...rest }: BaseImageProps): JSX.Element;
