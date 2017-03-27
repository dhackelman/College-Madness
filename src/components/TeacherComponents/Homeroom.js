import React from 'react';

class Homeroom extends React.Component {

    render() {

        return (
            <div className="teacher_homeroom">
                <h1>This is a Homeroom</h1>
                <div class="table">
                    <div class="row">
                        <div class="cell twocol">
                            <span>Content1</span>
                        </div>
                        <div class="cell twocol">
                            <span>Content2</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell onecol">
                            <span>Content3</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homeroom;
