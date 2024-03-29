import { ButtonWrapper } from './Button.style';

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Button = ({ onClick, children }: Props) => (
    <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);
