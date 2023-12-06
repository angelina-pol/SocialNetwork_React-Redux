import React, { useState } from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    const [moodEdit, setMoodEdit] = useState(false);
    const [stat, setStat] = useState(props.status);

    const editStatus = () => {
        setMoodEdit(!moodEdit)
    };

    let onStatusChange = (e) => {
        setStat(e.currentTarget.value)
        props.updateStatus(e.currentTarget.value)
    }

    const activateEditStatus = () => {
        setMoodEdit(false)
    }

    return (
        <div>
            {moodEdit 
            ? 
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={activateEditStatus} value={stat} />
                </div>
            :
                <div>
                    <b>Status: </b><span onDoubleClick={editStatus}>{props.status || 'New Status'}</span>
                </div>
            }
        </div>
    )
};

export default ProfileStatus;