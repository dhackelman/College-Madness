import React from 'react';

class ResearchStart extends React.Component {



    render() {
      const school = this.props.params.id;
        return (
                <div className="college__basics">
                    <h2>{school.name}</h2>
                    <p>Location:<span>{school.city},{school.state}</span>
                    </p>
                    <p>Student Population:<span>{school.student_size} students</span>
                    </p>
                    <p>Cost:<span>${school.out_of_state_tuition_average}</span>
                    </p>
                    <p>Learn More: <span><a href={school.url}>{school.url}</a></span>
                    </p>
                    <div className="college__visuals">
                        <div className="college__map">
                            <img src="https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,MQYmmxMkSb11rVrXqbjhVUiMRzr2yAYSBbjHe9hajcF--o0juyNVgcQPEocEP8EJFCnY5yzCAiv7-uW3MG9BT5U5u_oGfVwj977iwzQG-eD8Cv3uSwTKUdesO3jaWE6gscbJLcJgo-QN0L3l66EHHkhZFENPRChecjZcshyf9mXZVhfZmEJ9VzlJcpMrEUsMqVc74LMfVeLiT7d9nduTNpw_HcOhzOUQiSsDwL45cEc_yle-2wvRHDxn-3zCBeJsb446SBDiQfE7NGvBnzID4KDzyeZQBoA" alt="Map"/>
                        </div>
                        <div className="college__logo">
                            <img src="https://static1.squarespace.com/static/54341f4be4b0ebdd5103ead3/54d3d1b2e4b09df3e6abc9a2/55e75676e4b0786e908e5ea7/1442942133747/fan-feet-carolina-unc-tarheeled-rameses.png" alt="Mascot"/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ResearchStart;
