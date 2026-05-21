import { BussinessHours } from '@/types/BussinessHours';
import { BussinessHoursGet } from '@/types/BussinessHoursGet';
import axios from 'axios';

const businessHoursService = {

  async getBusinessHours(): Promise<BussinessHoursGet> {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'}/business-hours`);
      return response.data;
    } catch (error) {
      console.error('Error fetching business hours:', error);
      throw error;
    }
  },

  async updateBusinessHours(businessHours: Partial<BussinessHours>): Promise<BussinessHours> {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'}/business-hours`, businessHours);
      return response.data;
    } catch (error) {
      console.error('Error updating business hours:', error);
      throw error;
    }
  },

  async createBusinessHours(businessHours: BussinessHours): Promise<BussinessHours> {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'}/business-hours`, businessHours);
      return response.data;
    } catch (error) {
      console.error('Error creating business hours:', error);
      throw error;
    }
  },

  async deleteBusinessHours(id: string): Promise<void> {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'}/business-hours/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting business hours:', error);
      throw error;
    }
  },

  async getBusinessHoursById(id: string): Promise<BussinessHours> {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'}/business-hours/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching business hours by ID:', error);
      throw error;
    }
  },
}

export default businessHoursService;
