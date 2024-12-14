import React, { useEffect } from "react";

const Platforms = () => {
    useEffect(() => {
       
        const script = document.createElement("script");
        script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
        script.type = "text/javascript";
        document.body.appendChild(script);

       
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
           
            <div data-pym-src="https://www.jdoodle.com/embed/v1/4114866b58b3f6dd?stdin=1&arg=0" style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}></div>
        </div>
    );
};

export default Platforms;
