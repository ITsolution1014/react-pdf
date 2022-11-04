import React, {useEffect, useState} from "react";
import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import logo from "../assets/img/Logo company.jpg";
import location from "../assets/img/logo locality.jpg";
import hand from "../assets/img/logo handshake.jpg";
import focus from "../assets/img/logo focus.jpg";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingBottom:"130",
    paddingTop:"50",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionLogo: {
    margin: "0 30",
    marginTop:"-50",
    padding: "10 20",
    backgroundColor: "#0f2541",
  },
  table: {
    width: "100%",
    padding: "30 30",
    fontSize: "9px",
    textAlign: "center",
    marginBottom: "50",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: "none",
  },
  bold: {
    fontWeight: "bold",
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "5%",
  },
  row2: {
    width: "30%",
  },
  row3: {
    width: "30%",
  },
  row4: {
    width: "30%",
  },
  row5: {
    width: "27%",
  },
  position: {
    padding: "50 50 10 50",
  },
  subject: {
    padding: "5 30",
  },
  positionText: {
    fontSize: "10px",
    marginBottom: "20px",
  },
  positionContent: {
    fontSize: "10px",
  },
  positionTitle: {
    fontSize: "12px",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "10px",
    float: "right",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "20px",
  },
  subjectTitle: {
    fontSize: "10px",
    marginBottom: "15",
  },
  messageTitle: {
    fontSize: "10px",
    margin: "15 0",
  },
  endText: {
    fontSize: "10px",
    marginTop: "20",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
  footerContent: {
    // display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: "0 80",
  },
  footerText: {
    fontSize: "10",
    marginLeft: "-20",
    marginTop: "20",
    color:"#1f497d"
  },
  footerFocus: {
    fontSize:"10",
    marginTop:"20",
    marginLeft:"-30",
    color:"#1f497d"
  },
  divider: {
    border:"1px solid black",
    margin:"0 20 20 20",
  }
});

const MyDocument = (props) => {
  const { selectDate, data } = props;
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [calendarWeek, setCalendarWeek] = useState([]);
  
  const [days, setDays] = useState("");

  useEffect(() => {
    let currentDate = new Date();
    let d = currentDate.getDate();
    let m = currentDate.getMonth() + 1;
    let y = currentDate.getFullYear();
    setYear(y);

    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const calendartWeek = Math.ceil((((currentDate - startDate) / 86400000) + startDate.getDay() + 1) / 7);
    const weekDays = [];
    for(var i=1;i<8;i++) {
        const lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()+i));
        const dd = lastday.getDate();
        const mm = lastday.getMonth() + 1;
        weekDays.push(dd+"/"+mm);
    }
    setDays(weekDays);
    setCalendarWeek(calendartWeek);
  },[])

  useEffect(() => {
    var calDate = "";
    if(selectDate === 1 ) calDate = "12.04.2022";
    else if(selectDate ===2) calDate = "08.11.1988";
    else if(selectDate ===3) calDate = "05.08.2016";
    setDate(calDate);
  },[selectDate]);

  return (
    // <PDFViewer width="1000" height="2000">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sectionLogo}>
            <Image
              src={logo}
              style={{ width: "60%", marginLeft: "auto" }}
            ></Image>
          </View>
          <View style={styles.position}>
            <Text style={styles.positionText}>
              Tom Schlepp - Schäringerstraße 3 - 80634 München
            </Text>
            <Text style={styles.positionTitle}>Disciples München-Haar</Text>
            <Text style={styles.positionContent}>Sarah Enstone</Text>
            <Text style={styles.positionContent}>Keferloherstraße 24</Text>
            <Text style={styles.positionContent}>85540 Haar</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.subject}>
            <Text style={styles.subjectTitle}>
              Subject: Staff availibility at {calendarWeek}/{year}
            </Text>
            <Text style={styles.messageTitle}>
              Dear Disciples München-Haar,
            </Text>
            <Text style={styles.positionContent}>
              Hearby I inform you about the availibity of our staff by location
              and nationality for the current week.
            </Text>
            <Text style={styles.positionContent}>
              If you are interested in getting in touch with us, feel free to
              contact us.
            </Text>
            <Text style={styles.positionContent}>
              [ADDRESSOR COMPANY NAME] is looking forward to support your event.
            </Text>
            <Text style={styles.endText}>With best regards.</Text>
            <Text style={styles.endText}>Tom Schlepp</Text>
          </View>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>#</Text>
              <Text style={styles.row2}>Last Name</Text>
              <Text style={styles.row3}>First Name</Text>
              <Text style={styles.row4}>Nationality</Text>
              <Text style={styles.row5}>Location</Text>
              <Text style={styles.row5}>{days[0]}{"\n"}MO</Text>
              <Text style={styles.row5}>{days[1]}{"\n"}TU</Text>
              <Text style={styles.row5}>{days[2]}{"\n"}WE</Text>
              <Text style={styles.row5}>{days[3]}{"\n"}TH</Text>
              <Text style={styles.row5}>{days[4]}{"\n"}FR</Text>
              <Text style={styles.row5}>{days[5]}{"\n"}SA</Text>
              <Text style={styles.row5}>{days[6]}{"\n"}SO</Text>
            </View>
            {data.data &&
              data.data.map((row, i) => (
                <View key={i} style={styles.row} wrap={false}>
                  <Text style={styles.row1}>{row.id}</Text>
                  <Text style={styles.row2}>{row.lastName}</Text>
                  <Text style={styles.row2}>{row.firstName}</Text>
                  <Text style={styles.row3}>{row.nationality}</Text>
                  <Text style={styles.row5}>{row.location}</Text>
                  <Text style={styles.row5}>{row.monday}</Text>
                  <Text style={styles.row5}>{row.tuesday}</Text>
                  <Text style={styles.row5}>{row.wednesday}</Text>
                  <Text style={styles.row5}>{row.thursday}</Text>
                  <Text style={styles.row5}>{row.friday}</Text>
                  <Text style={styles.row5}>{row.saturday}</Text>
                  <Text style={styles.row5}>{row.sunday}</Text>
                </View>
              ))}
          </View>

          <View style={styles.footer} fixed>
            <Text style={styles.divider}></Text>
            <View style={styles.footerContent}>
              <View style={{ flex: "1", marginLeft:"30" }}>
                <Image src={location} style={{ width: "30" }}></Image>
                <Text style={styles.footerText}>
                  Schäringerstraße 3,{"\n"}
                    {"  "} 80634 München
                </Text>
              </View>
              <View style={{ flex: "1" }}>
                <Image src={hand} style={{ width: "30" }}></Image>
                <Text style={styles.footerText}>089 127 38 676</Text>
              </View>
              <View style={{}}>
                <Image src={focus} style={{ width: "30" }}></Image>
                <Text style={styles.footerFocus}>info@arrimo-digital.de</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    //  </PDFViewer>
  );
};
export default MyDocument;
