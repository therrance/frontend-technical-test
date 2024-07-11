// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  try {
    const response = await fetch('/api/vehicles.json');
    const vehicles = await response.json();

    const detailedVehicles = await Promise.all(vehicles.map(async (vehicle) => {
      try {
        const detailResponse = await fetch(vehicle.apiUrl);
        const details = await detailResponse.json();
        if (!details.price) throw new Error('No price info');
        return { ...vehicle, ...details };
      } catch (error) {
        return null; // Ignore vehicles with broken apiUrl or without price information
      }
    }));

    return detailedVehicles.filter((vehicle) => vehicle !== null);
  } catch (error) {
    return [];
  }
}
