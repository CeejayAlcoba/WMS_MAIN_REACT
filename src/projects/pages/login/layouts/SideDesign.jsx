import useWindowWidth from "../../../hooks/useWindowWidth";
import truckDelivery from '../../../../assets/truck-delivery.gif';
export default function SideDesign() {

    const { windowWidth } = useWindowWidth();
    return (
        <>
            {windowWidth > 768 && <img src={truckDelivery} alt="truck-delivery" className="w-50" />}
        </>
    )
}