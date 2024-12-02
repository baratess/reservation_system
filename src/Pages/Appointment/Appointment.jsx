import React, { useState, useEffect } from "react";
import { DatePicker, Select, Button } from "antd";
import Header from "../../Components/Header/Header";
import moment from "moment";
import "./Appointment.css";

const SportsAppointment = () => {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes] = useState([
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
    "22:00 - 23:00",
    "23:00 - 00:00",
  ]);

  // 30 günlük tarih listesi oluşturma
  useEffect(() => {
    const generateDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i); // Bugünden sonraki tarihler
        dates.push(date.toISOString().split("T")[0]); // "YYYY-MM-DD" formatında tarih
      }
      setAvailableDates(dates);
    };
    generateDates();
  }, []);

  // Spor dalını seçtikten sonra yönlendirme olmadan sayfa üzerinde görünür hale getirme
  const handleSportSelect = (value) => {
    setSelectedSport(value);
  };

  // Randevu işlemi
  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) {
      alert("Lütfen bir tarih ve saat seçin.");
      return;
    }

    alert(
      `${selectedSport} için ${selectedDate} tarihinde ${selectedTime} saatinde randevunuz başarıyla alındı.`
    );
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="appointment-container">
        {/* Spor Dalı Seçimi */}
        <div className="sport-selection">
          <h1>Randevu Alma Sistemi</h1>
          <h2>Bir Spor Dalı Seçin</h2>
          <Select
            style={{ width: "400px" }}
            placeholder="Spor dalı seçin"
            onChange={handleSportSelect}
            value={selectedSport}
          >
            <Select.Option value="Futbol">Futbol</Select.Option>
            <Select.Option value="Yüzme">Yüzme</Select.Option>
          </Select>
        </div>

        {/* Spor Dalı Seçildikten Sonra Tarih ve Saat Seçimi */}
        {selectedSport && (
          <div className="date-time-selection">
            <h2>{selectedSport} İçin Randevu Alın</h2>

            {/* Tarih Seçimi */}
            <div className="date-selection">
              <h3>Tarih Seçin</h3>
              <DatePicker
                style={{ width: "200px" }}
                placeholder="Tarih seçin"
                onChange={handleDateChange}
                value={selectedDate ? moment(selectedDate) : null}
                disabledDate={(current) => {
                  // Bugünden önceki tarihleri engelle
                  return (
                    (current && current < moment().startOf("day")) ||
                    !availableDates.includes(current.format("YYYY-MM-DD"))
                  );
                }}
              />
            </div>

            {/* Saat Seçimi */}
            <div className="time-selection">
              <h3>Saat Seçin</h3>
              <Select
                style={{ width: "200px" }}
                placeholder="Saat seçin"
                onChange={setSelectedTime}
                value={selectedTime}
              >
                {availableTimes.map((time) => (
                  <Select.Option value={time} key={time}>
                    {time}
                  </Select.Option>
                ))}
              </Select>
            </div>

            {/* Randevu Al Butonu */}

            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={!selectedDate || !selectedTime}
              className="a-button"
            >
              Randevu Al
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsAppointment;
