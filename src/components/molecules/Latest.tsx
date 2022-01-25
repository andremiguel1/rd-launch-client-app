import axios from 'axios';
import React, { useEffect, useState } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchDetail from "../atoms/LaunchDetail";

const API_LATEST_LAUNCH = 'https://rockt-launch-service.herokuapp.com/latest';

const Latest: React.FC = () =>
{
  const [launch, setLaunch] = useState({} as LaunchModel);

  useEffect(() =>
  { 
    const loadLatestLaunch = async() =>
    {
      const response = await axios.get(API_LATEST_LAUNCH);
      const { data } = response;
      setLaunch(data as LaunchModel);
    }
    loadLatestLaunch();
  }, [launch]);

  return (
    <React.Fragment>
      <LaunchDetail
        title="Latest Launch"
        date_local={ launch.date_local }
        details={launch.details}
        name={launch.name}
        flight_number={launch.flight_number}
        id={launch.id}
      />
    </React.Fragment>
  );
}

export default Latest;
