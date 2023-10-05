import React from "react";
import classes from './ProfileInfo.module.css';
import { useState } from "react";

const ProfileStatus = (props) => {

    const [moodEdit, setMoodEdit] = useState(false);

    const editStatus = () => {
        setMoodEdit(!moodEdit)
    };

    return (
        <div>
            {moodEdit 
            ? 
                <div>
                    <input autoFocus onBlur={editStatus} value={'hello world'} />
                </div>
            :
                <div>
                    <span onDoubleClick={editStatus}>ProfileStatus</span>
                </div>
            }
        </div>
    )
};

export default ProfileStatus;