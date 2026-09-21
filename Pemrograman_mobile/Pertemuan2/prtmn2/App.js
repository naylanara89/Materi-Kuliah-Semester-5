import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>CURRICULUM VITAE</Text>
        <Text style={styles.subtitle}>Data Diri Mahasiswa</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Data Pribadi</Text>

        <View style={styles.item}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={styles.value}>Nayla Rahma Farhanah</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>2488010026</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Asal Sekolah</Text>
          <Text style={styles.value}>MA Ali Maksum Yogyakarta</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Cita-cita</Text>
          <Text style={styles.value}>Menjadi Software Developer</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Rencana Mencapai Cita-cita</Text>
          <Text style={styles.value}>
            Saya akan terus belajar dan mengembangkan kemampuan
            dalam bidang pemrograman, mengikuti berbagai pelatihan,
            mengerjakan proyek-proyek sederhana, serta meningkatkan
            pengalaman agar dapat menjadi seorang Software Developer
            yang profesional.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 CV Saya
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  header: {
    backgroundColor: '#6c63ff',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    fontSize: 15,
    color: '#eeeeee',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginBottom: 20,
  },

  item: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777777',
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    color: '#222222',
    lineHeight: 24,
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  footerText: {
    color: '#888888',
    fontSize: 13,
  },
});