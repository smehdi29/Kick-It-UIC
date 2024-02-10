package net.backend.sphkbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "sport")
    private String sport;
    @Column(name = "time")
    private String time;
    @Column(name = "date")
    private Date date;
    @Column(name = "team_size")
    private Integer teamSize;
    @Column(name = "location")
    private String location;
    @Column(name = "numParticipants")
    private Integer numParticipants;
}
