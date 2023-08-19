export interface Hotels{
    module_name: string;
     for_admin: number; 
     icon: string; 
     label: string;
      ternary: boolean;
       subModules: {
         name: string; label: string; icon: string; 
        }[]
  }