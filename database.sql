CREATE DATABASE incidentreport;

CREATE TABLE incidentreport(
    client_id SERIAL PRIMARY KEY,
    incident_description varchar(50),
    city varchar(50),
    country varchar(50),
    weather_report jsonb
);