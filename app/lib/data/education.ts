export interface Education {
    id: number
    degree: string
    institution: string
    period: string
    status: string
  }
  
  export const education: Education[] = [
    {
      id: 1,
      degree: 'S1 - INFORMATIKA',
      institution: 'Telkom University Surabaya',
      period: '2021 - 2025',
      status: 'Lulus',
    },
    {
      id: 2,
      degree: 'SEKOLAH MENENGAH ATAS - IPA',
      institution: 'SMA N 2 Kota Bima',
      period: '2017 - 2020',
      status: 'Lulus',
    },
    {
      id: 3,
      degree: 'SEKOLAH MENENGAH PERTAMA',
      institution: 'SMP N 1 Sape',
      period: '2015 - 2017',
      status: 'Lulus',
    },
  ]
  