import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from "react-photo-gallery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export default function Home() {
  const photos = [
    {
      src: "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
      width: 2,
      height: 3
    },
    {
      src: "https://i.pinimg.com/564x/f9/b5/71/f9b5712d40e5f891819525bc2933d4ec.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 2
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false)
  };

  const toggleDatePicker = (value) => {
    setShowDatePicker(value);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"></link>
      </Head>
      <main className={styles.main}>
        <div className='container bg-primary h-800'>
          <Gallery photos={photos} />
        </div>

        <div className='container'>
          <div className="row d-flex">
            <div className="col-lg-4 col-md-12 mb-3 mb-lg-0 p-1 ">
              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-25 rounded mb-2"
                alt="Boat on Calm Water"
              />

              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-75 rounded mb-2"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0 p-1 ">
              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-75 rounded mb-2"
                alt="Wintry Mountain Landscape"
              />

              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-25 rounded mb-2"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0 p-1 ">
              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-25 rounded mb-2"
                alt="Wintry Mountain Landscape"
              />

              <img
                src="https://source.unsplash.com/PpOHJezOalU/800x599"
                className="w-100 object-fit-cover shadow-1-strong h-75 rounded mb-2"
                alt="Wintry Mountain Landscape"
              />
            </div>
          </div>
        </div>

        <div className="container h-800 bg-primary">
          <button className="btn" onClick={() => toggleDatePicker(true)}>
            Select a date
          </button>

          {showDatePicker && (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              onClickOutside={() => toggleDatePicker(false)}
              inline
            />
          )}
          {showDatePicker && (
            <div className="btn-container">
              <button className="btn" onClick={handleApply}>
                Apply
              </button>
              <button className="btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>

      </main>
    </>
  )
}
