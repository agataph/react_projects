import React from 'react';
import Button from '../Button/Button';
import './UserCard.css';

const UserCard = ({
    user,
    onEdit,
    onDelete
}) => {
    const {
        id,
        name,
        email,
        role = 'User',
        avatar,
        isActive = true
    } = user;

    return (
        <div className={`user-card ${!isActive ? 'inactive' : ''}`}>
            <div className="user-card-header">
                <div className="user-avatar">
                    <img
                        src={avatar}
                        alt={`${name} avatar`}
                    />
                    {isActive && <span className="status-indicator"></span>}
                </div>
                <div className="user-basic-info">
                    <h3 className="user-name">{name}</h3>
                    <p className="user-email">{email}</p>
                </div>
            </div>

            <div className="user-card-body">
                <div className="user-details">
                    <span className={`user-role role-${role.toLowerCase()}`}>
                        {role}
                    </span>
                    <div className={`user-status ${isActive ? 'active' : 'inactive'}`}>
                        <span className="status-dot"></span>
                        {isActive ? 'Aktif' : 'Nonaktif'}
                    </div>
                </div>
            </div>

            <div className="user-card-footer">
                <Button
                    variant="outline"
                    size="small"
                    onClick={() => onEdit(id)}
                >
                    ✏️ Edit
                </Button>
                <Button
                    variant="danger"
                    size="small"
                    onClick={() => onDelete(id)}
                >
                    🗑️ Hapus
                </Button>
            </div>
        </div>
    );
};

export default UserCard;