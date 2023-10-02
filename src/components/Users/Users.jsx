import React from 'react';
import userPhoto from '../../assets/images/instealPhoto.jpeg';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {
    let pagesСount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesСount; i++) {
        pages.push(i);
    }

    return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                    props.unfollow(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            )}
    </div>
}

export default Users;