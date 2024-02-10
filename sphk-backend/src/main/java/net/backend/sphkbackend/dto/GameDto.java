package net.backend.sphkbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GameDto {
    private Long id;
    private String title;
    private String sport;
    private String time;
    private Date date;
    private Integer teamSize;
    private String location;
    private Integer numParticipants;
}
