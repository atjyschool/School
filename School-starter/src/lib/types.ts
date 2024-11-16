export type Appointment = {
    id: number;
    status: string;
    location: string;
    resource: string;
    address: string;
  };
  
  export type EventItem = {
    title: String;
    allDay: Boolean;
    start: Date;
    end: Date;
    data?: {
        appointment: Appointment;
    };
    isDraggable?: boolean;
    isResizable?: boolean;
    resourceId?: number;
  };
