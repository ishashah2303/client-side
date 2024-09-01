import React from "react";

interface AddIconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
}

interface DeleteIconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
}

export const AddIcon: React.FC<AddIconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label} // Use aria-label for accessibility
      {...props}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeleteIcon: React.FC<DeleteIconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      {...props}
    >
      <path
        d="M19 7H5v10h14V7zm-1 0V5H6v2H4v2h16V7h-2z"
        fill={fill}
      />
    </svg>
  );
};
