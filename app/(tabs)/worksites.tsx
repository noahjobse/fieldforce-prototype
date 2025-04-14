import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LocationIcon } from '@/components/ui/Icons';

export default function WorksitesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Worksites</Text>
      </View>

      <ScrollView style={styles.worksitesList}>
        <View style={styles.worksitesGrid}>
          <WorksiteCard name="Bebo Grove" address="1330 24 St SW, Calgary, AB T2T 1P5" />
          <WorksiteCard
            name="Rosebud Valley Campground"
            address="40 St S, AB-849, Drumheller, AB T0J 0Y0"
            subtitle="1000 sqyd"
          />
          <WorksiteCard name="Many Springs Day Use Area" address="Kananaskis, AB T0L 2K0" />
        </View>
      </ScrollView>
    </View>
  );
}

function WorksiteCard({ name, address, subtitle }: { name: string; address: string; subtitle?: string }) {
  return (
    <View style={styles.worksiteCard}>
      <View style={styles.cardIcon}>
        <LocationIcon />
      </View>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardAddress}>{address}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a9d8f',
  },
  titleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  worksitesList: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  worksitesGrid: {
    flexDirection: 'column',
    gap: 16,
    paddingBottom: 24,
  },
  worksiteCard: {
    backgroundColor: '#f5c7c7',
    borderRadius: 8,
    padding: 16,
    position: 'relative',
  },
  cardIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#f0b0b0',
    height: 24,
    width: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#8f3232',
  },
  cardAddress: {
    fontSize: 12,
    color: '#a33e3e',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#b54b4b',
  },
});