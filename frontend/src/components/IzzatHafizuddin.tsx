import Typewriter from 'typewriter-effect';

const Error = () => {
    return (
        <section id="izzat-hafizuddin">
            <h1>Izzat Hafizuddin</h1>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Full-Stack Software Engineer ')
                        .pauseFor(150)
                        .start();
                }}
            />
        </section>
    )
}

export default Error