// cast to boolean
!!0          // false
!!1          // true
!!""         // false
!!"a"        // true
Boolean(0)   // false
Boolean(1)   // true
Boolean("")  // false
Boolean("1") // true

// defaults
!""      // true
!!""     // false
!"hello" // false
!"true"  // false
!0       // true
!!0      // false
!1       // false
!-1      // false
!{}      // false
!!{}     // true