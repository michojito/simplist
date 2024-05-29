import { ColorPalette } from "../../constants";
import { EmptyPage } from "./EmptyPage";

type Props = {
    color: ColorPalette
}
export function MainPage (props: Props) {
    
    return (
        <EmptyPage color={props.color}/>
    )
}