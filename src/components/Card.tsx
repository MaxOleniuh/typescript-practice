import {FC,PropsWithChildren, useState} from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
    width, height, variant, 
    children, onClick }) => {
    const [state, setState] = useState(0);
  return (
      <div style={{
          width, height, border: variant === CardVariant.outlined ? '2px solid grey' : 'none',
          background: variant === CardVariant.primary ? 'purple' : "green",
      }}
           onClick={() => onClick(state)}
      >
          {children}
    </div>
  )
}
