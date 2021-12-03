import React from "react";
import './_task.scss';

export default function Tasks() {
    return (
        <div className='tasks__container'>
            <p className='tasks__title'>Upcoming Tasks <span>5</span></p>
            <div className='tasks__card-container'>
                <div className="task__card">
                    <p className="task__card-title">Order #890PO90</p>

                    <p className="task__card-name">Bryan Williams</p>

                    <div className="task__card-progress-txt">
                        <p className="task__card-txt">Progress</p>

                        <p className="task__card-percentage">20%</p>
                    </div>

                    <progress className="task__card-progress" max='100' value='20'></progress>

                    <p className="task__card-day">1 days left</p>
                </div>

                <div className="task__card">
                    <p className="task__card-title">Order #890PO90</p>

                    <p className="task__card-name">Marcus Klaus</p>

                    <div className="task__card-progress-txt">
                        <p className="task__card-txt">Progress</p>

                        <p className="task__card-percentage">20%</p>
                    </div>

                    <progress className="task__card-progress" max='100' value='20'></progress>

                    <p className="task__card-day">3 days left</p>
                </div>
            </div>
        </div>
    );
}