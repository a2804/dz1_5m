import {useSelector} from 'react-redux';

function AboutPage() {

    const count = useSelector(state => state.count)

    return (
        <>
            <h1>{count}</h1>
        </>
    );
}

export default AboutPage;