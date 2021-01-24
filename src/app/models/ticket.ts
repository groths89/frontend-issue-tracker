export interface Ticket {
    id: number;
    subjectTitle: string;
    bodyDescription: string;
    createdBy: string;
    createdDate: Date;
    dueDate: Date;
    isCompleted: boolean;
}