import React, { Component } from 'react'
import { useRouteMatch } from 'react-router-dom'
export default function User() {
    let match = useRouteMatch()
    console.log(match)
    return (
        <div className="user">

            user
        </div>
    )
}
