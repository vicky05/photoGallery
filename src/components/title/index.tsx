import { Tprops } from '../../@types/common';

const Title = (props: Tprops) => {
    const { title } = props
    return (
        <h2 className="heading-text margin-header">List of <span>{title}</span></h2>
    );
}

export default Title;