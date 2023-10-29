import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../features/userSlice';
import { auth, provider, storage } from '../firebase';
import styles from './Auth.module.css';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Paper,
    Grid,
    Typography,
    makeStyles,
    Modal,
    IconButton,
    Box,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CameraIcon from '@material-ui/icons/Camera';
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function getModelStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}, -${left}%)`,
    };
}

const useStyle = mageStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgraundImage:
        'url(https://images.unsplash.com/photo-1558272726-4d633dd2495a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    modal: {
        outline: 'none',
        position: 'absolute',
        width: 400,
        borderRadius: 10,
        backgroundColor: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(10),
    },
}));

const Auth: React.FC =() => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = userState('');
    const[avatarImage, setAvatarImage] = useState<File | null>(null);
    const [isLogin, setIsLogin] = useState(true);
    const [openModal, setOpenModal] = React.useState(false);
    const [resetEmail, setResetEmail] = useState('');


    const sendResetEmail = async (e: React.MouseEvent<HTMLElement>) => {
        await sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
            setOpenModal(false);
            setResetEmail('');
        })
        .catch((err) => {
            alert(err.message); 
            setResetEmail('');
        });
    };

    const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files![0]) {
            setAvatarImage(e.target.files![0]);
            e.target.value='';
        }
    };

    const singleInEmail = async () => {
    //TODO
    };

    const signUpEmail = async () => {
        //TODO
    };

    const signInGoogle = async () => {
        //TODO
    };
    return (
        <Grid/>
        // TODO
    );
};

export default Auth
