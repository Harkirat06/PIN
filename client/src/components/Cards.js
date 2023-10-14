import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from 'react-bootstrap'
import React from "react";
import Card from "./Card";

function Cards({ context }) {
    const { archivos, setRefrescar, setPath, path, setArchivos, refrescar, token,setToken,
        error, setError, finish, setFinish, showUpload, setShowUpload,
        showDownload, setShowDownload, setShowVideo, showVideo } = useContext(context)
    const navigate = useNavigate()
}