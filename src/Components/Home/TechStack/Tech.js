import React from "react";
import "./Tech.css";
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
const Tech = () => {
    const [clickedVal,setClickedVal]=useState(0)
    const handleButtonClick = (value) => {
        setClickedVal(value);
      };
  return (
    <section id="our-services">
      <div class="container">
        <div class="desc">
          <div class="heading">
            <h1>Our Expertise</h1>
          </div>
          <div className="text">
            <p onClick={() => handleButtonClick(0)} className={clickedVal === 0 ? 'selected' : ''}>
              Frontend
            </p>
            <p onClick={() => handleButtonClick(1)} className={clickedVal === 1 ? 'selected' : ''}>
              Backend
            </p>
            <p onClick={() => handleButtonClick(2)} className={clickedVal === 2 ? 'selected' : ''}>
              Database
            </p>
          </div>
        </div>
        {clickedVal==0&&
        <div class="services">
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
              {/* <i class="bi bi-airplane"></i> */}
                <FaHtml5 class="service-icon" style={{fontSize:"50px"}}/>
              </div>
            </div>
            
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"></i>
              </div>
            </div>
            
          </div>
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-bullhorn"></i>
              </div>
            </div>
            
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"></i>
              </div>
            </div>
            
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-wrench"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-database"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-chart-pie"></i>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-tasks"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-certificate"></i>
              </div>
            </div>
            <div class="service ">
              <div class="service-desc">
                <i class="service-icon"></i>
              </div>
            </div>
          </div>
        </div>
        }
    {clickedVal==1&&
        <div class="services">
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
              {/* <i class="bi bi-airplane"></i> */}
                <FaPython class="service-icon" style={{fontSize:"50px"}}/>
              </div>
            </div>
            
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"></i>
              </div>
            </div>
            
          </div>
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-bullhorn"></i>
              </div>
            </div>
            
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"></i>
              </div>
            </div>
            
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-wrench"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-database"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-chart-pie"></i>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-tasks"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-certificate"></i>
              </div>
            </div>
            <div class="service ">
              <div class="service-desc">
                <i class="service-icon"></i>
              </div>
            </div>
          </div>
        </div>
        }
            {clickedVal==2&&
        <div class="services">
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
              {/* <i class="bi bi-airplane"></i> */}
                <FaPython class="service-icon" style={{fontSize:"50px"}}/>
              </div>
            </div>
            
            <div class="service">
            <div class="service-desc">
              {/* <i class="bi bi-airplane"></i> */}
                <SiPostgresql class="service-icon" style={{fontSize:"50px"}}/>
              </div>
            </div>
            
          </div>
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="bi bi-airplane"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-bullhorn"></i>
              </div>
            </div>
            
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"></i>
              </div>
            </div>
            
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-wrench"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-database"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-chart-pie"></i>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-tasks"></i>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-certificate"></i>
              </div>
            </div>
            <div class="service ">
              <div class="service-desc">
                <i class="service-icon"></i>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  );
};

export default Tech;
